// Typages Supabase Edge Runtime
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const TO_EMAIL = "edisokenou@gmail.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
  // Réponse au preflight CORS
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const payload = await req.json();

    const subject =
      payload.subject && payload.subject.trim().length > 0
        ? `[Nouveau message] ${payload.subject}`
        : "[Nouveau message depuis le portfolio]";

    const textBody = `
Nouveau message de votre site :

Nom : ${payload.name}
Email : ${payload.email}
Type de service : ${payload.service_type ?? "Non précisé"}

Message :
${payload.message}
`.trim();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Expéditeur par défaut accepté par Resend
        from: "Portfolio <onboarding@resend.dev>",
        to: [TO_EMAIL],
        subject,
        text: textBody,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Erreur Resend:", errText);
      return new Response("Email error", {
        status: 500,
        headers: corsHeaders,
      });
    }

    return new Response("OK", {
      status: 200,
      headers: corsHeaders,
    });
  } catch (e) {
    console.error("Erreur contact-email:", e);
    return new Response("Error", {
      status: 500,
      headers: corsHeaders,
    });
  }
});