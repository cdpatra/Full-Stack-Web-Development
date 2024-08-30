<%@page import="org.hibernate.query.Query"%>
<%@page import="java.util.List"%>
<%@page import="com.entities.Note"%>
<%@page import="org.hibernate.Transaction"%>
<%@page import="com.helper.FactoryProvider"%>
<%@page import="org.hibernate.Session"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="tailwindCSS/output.css" rel="stylesheet">
<title>All Notes</title>
</head>
<body>
	<%@include file="navbar.jsp"%>
	<div id="allNotesContainer" class="flex gap-6 flex-wrap mx-20">
		<%
		// Initialize session
		Session s = null;
		try {
			// Open session
			s = FactoryProvider.getFactory().openSession();

			// Query to fetch all notes
			List<Note> notes = s.createQuery("from Note", Note.class).list();

			// Iterate over notes and display titles
			for (Note note : notes) {
		%>


		<div
			class="flex flex-col justify-between p-5 max-w-xs bg-slate-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

			<div>
				<a href="#"> <img class="rounded-t-lg w-32 mb-4 mx-auto"
					src="img/notes.png" alt="Notes images" />
				</a> <a href="#">
					<h5
						class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						<%=note.getTitle()%>
					</h5>
				</a>
				<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
					<%
					String str = note.getNotes();
					if (str.length() < 150)
						out.print(str);
					else
						out.print(str.substring(0, 150) + "...");
					%>
				</p>
			</div>
			<a href="showNotes.jsp?id=<%=note.getId()%>"
				class="self-start inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
				Read more <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
					aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
					viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round"
						stroke-linejoin="round" stroke-width="2"
						d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
			</a>
		</div>


		<%
		}

		} catch (Exception e) {
		// Print stack trace in server logs and display user-friendly message
		e.printStackTrace();
		out.println("An error occurred while fetching the notes.");
		} finally {
		// Ensure session is closed
		if (s != null) {
		s.close();
		}
		}
		%>
	</div>
</body>
</html>
