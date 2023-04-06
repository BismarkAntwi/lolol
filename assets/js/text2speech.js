<script>
	function speak() {
		const postElement = document.getElementById("post");
	    	const postText = postElement.innerText;
		const utterance = new SpeechSynthesisUtterance(postText);
		window.speechSynthesis.speak(utterance);};
</script>



