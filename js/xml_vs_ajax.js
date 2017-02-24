var xmlhttp = new XMLHttpRequest();
xmlhttp.open("POST", "https://app.close.io/hackwithus/");
xmlhttp.setRequestHeader("Content-Type", "application/json");
xmlhttp.send(
	JSON.stringify(
		{
			first_name: "Robert",
			last_name: "Ang",
			email: "ang.robert.sh@gmail.com",
			phone: "(510) 685-8643",
			cover_letter: "Hi Close, I am a web developer with experience in React/Redux and Rails. I think CRMs have a lot of interesting problems to think through and I would like to be a part of your team helping you perfect yours. I have an educational background in cognitive science and creating and implementing great UX is something I am really inspired by. Thanks for taking the time to review my application",
			urls: {
				resume: "drive.google.com/file/d/0B6vpNlAGsV7hV1BjVUhiNkw5Zms/view",
				github: "github.com/angrobertsh",
				linkedin: "linkedin.com/in/angrobert"
			}
		}
	)
);



$.ajax({
		method: "POST",
		url: 'https://app.close.io/hackwithus/',
		contentType: 'application/json',
		data: JSON.stringify({first_name: "Robert", last_name: "Ang", email: "ang.robert.sh@gmail.com", phone: "(510) 685-8643", cover_letter: "Hi Close, I am a web developer with experience in React/Redux and Rails. I think CRMs have a lot of interesting problems to think through and I would like to be a part of your team helping you perfect yours. I have an educational background in cognitive science and creating and implementing great UX is something I am really inspired by. Thanks for taking the time to review my application", urls: ["drive.google.com/file/d/0B6vpNlAGsV7hV1BjVUhiNkw5Zms/view", "github.com/angrobertsh", "linkedin.com/in/angrobert"]}),
		success: (data) => console.log(data)

	});
