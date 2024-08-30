<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Add Notes</title>
<link href="tailwindCSS/output.css" rel="stylesheet">
</head>
<body>
	<%@include file="navbar.jsp"%>
	<div id="addNotes" class="max-w-4xl mx-auto p-4 bg-slate-200 rounded"	>

		<form  action="SaveNotesServlet" method="post" class="flex flex-col border-slate-500 border-2 rounded p-4 ">
			<div>
				<label for="small-input" class=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
					 <input name="title" required type="text" placeholder="Enter your title here ..." id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
			</div>
			<div class="my-5">
				<label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Notes</label> 
				<textarea required name="notes" id="large-input" placeholder="Enter your notes here ..." class="h-80 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
			</div>
			<button type="submit" class="self-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add</button>
		</form>

	</div>
</body>
</html>