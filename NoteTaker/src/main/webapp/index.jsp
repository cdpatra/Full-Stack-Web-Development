<html>
<head>
<title>Note Taker</title>
<link href="tailwindCSS/output.css" rel="stylesheet">
</head>
<body>
	<%@include file="navbar.jsp"%>

	<div id="home" class="flex my-16 gap-8 flex-wrap justify-center items-center">
		<div
			class="max-w-sm border bg-slate-200 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<a href="allNotes.jsp"> <img class="rounded-t-lg p-8" src="img/notes.png"
				alt="notes image" />
			</a>
			<div class="p-5 text-center">
				<a href="allNotes.jsp"	class="w-full my-4 px-4 py-2 text-lg font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					Show All Notes
				</a>
			</div>
		</div>
		<div
			class="max-w-sm border bg-slate-200 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<a href="addNotes.jsp"> <img class="rounded-t-lg p-8" src="img/add.png"
				alt="notes image" />
			</a>
			<div class="p-5 text-center">
				<a href="addNotes.jsp"	class="w-full my-4 px-4 py-2 text-lg font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					Add a New Note
				</a>
			</div>
		</div>
	</div>

</body>
</html>
