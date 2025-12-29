import { Resend } from 'resend';

export async function onRequestPost({ request, env }) {
    const data = await request.json();

    const emailHtml = `
        <h2>Nova rezervacija</h2>
        <p><strong>Ime:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefon:</strong> ${data.phoneNumber}</p>
        <p><strong>Datum:</strong> ${data.bookingDate}</p>
        <p><strong>Vrsta:</strong> ${data.bookingType}</p>
        <p><strong>Poruka:</strong><br/>${data.message || '-'}</p>
    `;

    const resend = new Resend(env.RESEND_API_KEY);

    await resend.emails.send(
    {
        from: 'onboarding@resend.dev',
        to: 'ignjatovicadam@gmail.com',
        subject: 'Restoran ranc legenda - Nova rezervacija',
        html: emailHtml,
    });

    return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' },
    });
}