var maleFirstName = ["Aadi", "Aayush", "Abhimanyu", "Bahadurjit", "Balvan",
    "Chandresh", "Devansh", "Gautam", "Gaurav", "Harsh", "Hardik",
    "Hitesh", "Ishaan", "Indrajit","Jagat","Jatin","Kabir",
    "Laksh","Madhav","Maanav","Naksh","Nitesh","Onveer","Pranit",
    "Rachit","Ranbir","Rushil","Veer"];

var femaleFirstName = ["Aanya", "Aditi", "Aishwarya", "Ananya", "Anushka",
    "Arohi", "Avani", "Bhavya", "Chahat", "Charvi", "Deeksha",
    "Dhriti", "Diya", "Gargi","Ira","Ishika","Jhanvi",
    "Kaira","Kashvi","Kiara","Mahika","Myra","Navya","Prisha",
    "Ridhi","Riya","Saisha","Shanaya","Vanya"];

var lastName = ["Acharya", "Aggarwal", "Ahluwalia", "Anand", "Chatterjee",
    "Chakraborty", "Bhavsar", "Chaudhary", "Chopra", "Dutt", "Gupta",
    "Goswami", "Ganesh", "Kapoor","Kumar","Maharaj","Malhotra",
    "Mathur","Mehta","Mukherjee","Pandey","Raj","Saxena","Thakur",
    "Tiwari","Tripathi","Varma","Trivedi"];

	function getName(gender) {
		if (gender === 'male') {
			return maleFirstName[Math.floor(Math.random() * maleFirstName.length)] + ' '+ lastName[Math.floor(Math.random() * lastName.length)];
		} else if (gender === 'female') {
			return femaleFirstName[Math.floor(Math.random() * femaleFirstName.length)] + ' '+ lastName[Math.floor(Math.random() * lastName.length)];
		} else {
			return "Unknown Gender"; // Handle other cases, if necessary
		}
	}
	
	function nameQty() {
		// Check if a gender is selected
		var selectedGender = document.querySelector('input[name="gender"]:checked');
		if (!selectedGender) {
			alert("Please choose a gender to generate a name.");
			return;
		}
		
		// Get the value of the selected gender
		var genderValue = selectedGender.value;
		
		// Check if the selected gender value is either 'male' or 'female'
		if (genderValue !== 'male' && genderValue !== 'female') {
			alert("Invalid gender selection.");
			return;
		}
		
		// Generate a random name based on the selected gender
		var randomName = getName(genderValue);
		
		// Fade out and slide up the current name
		var nameList = document.querySelector('.nameList');
		nameList.style.opacity = 0;
		nameList.style.transform = 'translateY(-20px)';
		
		// After a short delay, update the name and fade it in while sliding down
		setTimeout(function() {
			nameList.innerHTML = randomName;
			nameList.style.opacity = 1;
			nameList.style.transform = 'translateY(0)';
			
			// Add animation effect
			nameList.classList.remove('pulse-animation'); // Remove animation class if exists
			void nameList.offsetWidth; // Trigger reflow
			nameList.classList.add('pulse-animation'); // Add animation class
		}, 300); // Adjust the delay as needed
	}
	
	

function selectGender(gender) {
    // Remove the border from all options
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add border to the selected option
    document.querySelector('.' + gender).classList.add('selected');
}

window.onload = function() {
    // Remove the .selected class from both options when the page loads
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Set default white border to male option
    document.querySelector('.male').classList.add('selected');
    
    alert("Please choose a gender to generate a name.");
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('backButton').addEventListener('click', function() {
        window.history.back(); // Navigate back to the previous page
    });
});
