<script>
	import Testimonial from '$lib/components/testimonial.svelte';
	import daniel from '$lib/images/image-daniel.jpg';
	import jonathan from '$lib/images/image-jonathan.jpg';
	import jeanette from '$lib/images/image-jeanette.jpg';
	import patrick from '$lib/images/image-patrick.jpg';
	import kira from '$lib/images/image-kira.jpg';
</script>

<main class="px-8 py-16 md:px-32 md:min-h-screen my-auto bg-neutral-light-grayish-blue">
	<section class="grid md:grid-cols-4 gap-6">
		<Testimonial
			name="Daniel Clifford"
			rank="Verified Graduate"
			src={daniel}
			class="bg-primary-violet md:col-span-2"
			title="I received a job offer mid-course, and the subjects I learned were current, if not more so, 
        in the company I joined. I honestly feel I got every penny’s worth."
			description="“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
        transition and have heard some people who had an amazing experience here. I signed up 
        for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
        The next 12 weeks was the best - and most grueling - time of my life. Since completing 
        the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”"
		/>
		<Testimonial
			name="Jonathan Walters"
			rank="Verified Graduate"
			src={jonathan}
			class="bg-primary-dark-grayish-blue"
			title="The team was very supportive and kept me motivated"
			description="“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
            for a big company. This was one of the best investments I’ve made in myself. ”"
		/>
		<Testimonial
			name="Jeanette Harmon"
			rank="Verified Graduate"
			src={jeanette}
			class="bg-white !text-primary-dark-blackish-blue"
			title="An overall wonderful and rewarding experience"
			description="“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
            while doing something I love. ”"
		/>
		<Testimonial
			name="Patrick Abrams"
			rank="Verified Graduate"
			src={patrick}
			class="bg-primary-dark-blackish-blue md:col-span-2"
			title="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
            learning from their experiences was easy."
			description="“ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
            gave me the confidence necessary to be able to go out in the world and present myself as a capable 
            junior developer. The standard is above the rest. You will get the personal attention you need from 
            an incredible community of smart and amazing people. ”"
		/>
		<Testimonial
			name="Kira Whittle"
			rank="Verified Graduate"
			src={kira}
			class="bg-white !text-primary-dark-blackish-blue md:row-start-1 md:col-start-4 md:row-span-2"
			title="Such a life-changing experience. Highly recommended!"
			description="“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
            professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
            student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
            did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
            project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
            could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
            experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
            100% recommend! ”"
		/>
	</section>
</main>
