fetch('https://v1.hitokoto.cn?c=d')
					.then(response => response.json())
					.then(data => {
					const hitokoto = document.getElementById('hitokoto_text')
					hitokoto.innerText = data.hitokoto
					})
					.catch(console.error)