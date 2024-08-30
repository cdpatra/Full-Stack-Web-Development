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


public class SaveNotesServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public SaveNotesServlet() {
		super();
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		try {
			String title = request.getParameter("title");
			String notes = request.getParameter("notes");

			Session session = FactoryProvider.getFactory().openSession();
			Transaction transaction = session.beginTransaction();

			Note note = new Note(title, notes, new Date());
			session.persist(note);

			transaction.commit();
			session.close();
			
			response.sendRedirect("allNotes.jsp");

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
