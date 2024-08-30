package com.servlets;

import java.io.IOException;
import java.util.Date;
import org.hibernate.Session;
import org.hibernate.Transaction;
import com.entities.Note;
import com.helper.FactoryProvider;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class UpdateNotesServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public UpdateNotesServlet() {
		super();
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		try {
			int id = Integer.parseInt(request.getParameter("id"));
			String title = request.getParameter("title");
			String notes = request.getParameter("notes");
			Session s = FactoryProvider.getFactory().openSession();
			Transaction tx = s.beginTransaction();
			Note note = s.get(Note.class,id);
			note.setTitle(title);
			note.setNotes(notes);
			note.setAddedDate(new Date());
			tx.commit();
			s.close();
			response.sendRedirect("allNotes.jsp");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
