import javax.swing.JOptionPane;
//Programa que despliega 4 metodos en un menú de opciones
//Autor: Carlos Chávez García
//Fecha de edición: 05 / Septiembre / 2025
public class inicioPAM 
{
	public static void main(String args[])
	{
		int opcionValida,volverValido;
		String opcion,volver;
		do 
		{
		opcion = JOptionPane.showInputDialog("¿Qué opción quieres usar? ReglamentoPOO = 1 / LineamientosClassroom = 2 / FechasdeParciales = 3 / PorcentajesporParcial = 4");
		opcionValida = Integer.parseInt(opcion);
		inicioPAM m=new inicioPAM();
		
		if(opcionValida == 1)
		{
			m.ReglamentoPOO();
		}
		else if(opcionValida == 2)
		{
			m.LineamientosClassroom();
		}
		else if(opcionValida == 3)
		{
			m.FechasdeParciales();
		}
		else 
		{
			m.PorcentajesporParcial();
		}
		volver = JOptionPane.showInputDialog("Deseas volver Si = 1/ No/ 0: ");
		volverValido = Integer.parseInt(volver);
	}while(volverValido == 1);
		
	}
	public void ReglamentoPOO()
	{
		JOptionPane.showMessageDialog(null, "\n1.Se requiere 80% de asistencia para tener derecho a evaluación parcial y 80% de trabajos en clase.\n2.Se permiten 10 minutos de tolerancia y si el alumno llega después de este tiempo puede permanecer en la clase, pero no se tomará la asistencia (Solamente en los horarios de\ninicio:7:00a.m y 14:00 p.m).\n3. Las faltas deberán estar justificadas mediante el correo institucional con un plazo máximo de 24 horas posteriores a la hora de falta en clase mediante correo del tutor (a),\njustificantes entregados fuera de la fecha límite permitido no se aceptan, únicamente se aceptarán recetas médicas y citatorios jurídicos.(De forma física deben ser presentados al\ntutor para ser validados y de forma posterior emitidos).\n4. Las tareas y trabajos deberán subirlas al Classroom de forma individual y no se recibirán de manera extemporánea.(Salvo previo justificante validado por el tutor)\n5. Las tareas y trabajos presentarlos en tiempo y forma. La demora de un trabajo o tarea sin justificante y/o con justificante fuera del límite no se aceptan.\n6. Utilizar el correo institucional para trabajar bajo la plataforma Google Classroom.\n7. El plagio o copia de trabajos y/o exámenes, será condicionado a reprobar a la asignatura y se reportará al área correspondiente.\n8. Cualquier deshonestidad académica será sancionada reprobando el parcial sin derecho a examen final\n9. En circunstancia de indisciplina o falta de respeto por parte del alumno hacia docentes,administrativos, compañeros o cualquier persona perteneciente a la universidad, se realizará\nuna primera llama de atención, si el alumno hace caso omiso tendrá que abandonar el aula, tres incidencias de este tipo el alumno no tendrá derecho a examen final o parcial.\n10. Uso de laptops y/o dispositivos móviles quedará limitados a uso exclusivo de las actividades que así lo requieran.\n11. Prohibido el uso de audífonos durante la clase.\n12. Prohibido comer y/o tomar líquidos en el salón.\n13. Prohibido sentarse encima de las mesas , así como columpiarse en las sillas.\n14.Todo tema académido debe ser revisado primeramente por parte del alumno con el docente, de no resolverse, pasar con su respectivo tutor, y de ser necesario con la coordinación\nde tutores. En caso de no solucionarse pasar a la dirección del programa educativo (debe mantenerse este seguimiento de forma obligatoria)\n15.Cualquier situación no prevista en el presente reglamento pasar directamente con la dirección del programa educativo.\n16. El día destinado a entrega de calificaciones todos los estudiantes deben estar presentes, ese día se entregarán exámenes y se brindará retroalimentación\n17.Este reglamento entra en vigor después de que se firme o se acepte por la mayoría de los estudiantes asistentes a la primera sesión de la materia, una vez firmado o aceptado por el\n50% más el jefe de grupo, es vigente para todo alumno inscrito en el curso aunque no esté presente en la primera sesión.","Reglamento POO",JOptionPane.PLAIN_MESSAGE);
	}
	public void LineamientosClassroom()
	{
		JOptionPane.showMessageDialog(null, "\n1.Comentar con lenguaje apropiado y evitar spam o mensajes fuera de contexto.\n2.Cumplir con las fechas límite establecidas en cada actividad.\n3.No modificar ni eliminar archivos compartidos por el docente.\n4.Usar los comentarios privados para dudas académicas, no para conversaciones personales","Lineamientos de classroom",JOptionPane.PLAIN_MESSAGE);
	}
	public void FechasdeParciales()
	{
		JOptionPane.showMessageDialog(null, "\n1er Parcial: 01-10-25\n2do Parcial: 05-10-25\n3er Parcial: 03-12-25\nFinal: 08-12-25","Fechas de parciales",JOptionPane.PLAIN_MESSAGE);
	}
	public void PorcentajesporParcial()
	{
		JOptionPane.showMessageDialog(null, "\nEvidencia de conocimiento: P1:40% P2:40% P3:20%\nEvidencia de desempeño:    P1:20% P2:20% P3:10% \nEvidencia de producto:         P1:30% P2:20% P3:40% \nProyecto integrador:              P1:10% P2:20% P3:30%","Porcentajes por parcial",JOptionPane.PLAIN_MESSAGE);
	}
}