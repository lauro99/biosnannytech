import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { nombre, nombreNino, telefono, edad, email, fecha, horario, servicio, mensaje } = data;

    const { data: emailData, error } = await resend.emails.send({
      from: 'BIOSNANNYTECH <onboarding@resend.dev>',
      to: ['laureano.g.t@outlook.com'],
      subject: `Nueva Cita Agendada: ${nombre}`,
      html: `
        <h2>Nueva solicitud de visita/cita</h2>
        <ul>
          <li><strong>Padre/Madre:</strong> ${nombre}</li>
          <li><strong>Nombre del Niñ@:</strong> ${nombreNino || 'No especificado'}</li>
          <li><strong>Teléfono:</strong> ${telefono}</li>
          <li><strong>Edad del Niñ@:</strong> ${edad || 'No especificada'}</li>
          <li><strong>Correo Electrónico:</strong> ${email || 'No especificado'}</li>
          <li><strong>Fecha Preferida:</strong> ${fecha || 'No especificada'}</li>
          <li><strong>Horario Preferido:</strong> ${horario || 'No especificado'}</li>
          <li><strong>Servicio de Interés:</strong> ${servicio || 'No especificado'}</li>
        </ul>
        <p><strong>Mensaje Adicional:</strong><br/> ${mensaje || 'Ninguno'}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, emailData });
  } catch (error) {
    return NextResponse.json({ error: 'Hubo un problema al enviar el correo' }, { status: 500 });
  }
}
