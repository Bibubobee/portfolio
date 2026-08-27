import clockCover from './images/clock_cover.png'
import rm3Cover from './images/rm3_cover.png'
import spellrainCover from './images/spell_cover.png'
import lillyWillyCover from './images/lilly_willy_cover.png'
// import bajoTierraGif from './images/BajoTierra_Cover.gif'
import bajoTierraCover from './images/BajoTierra_TITLE.png'

// TODO: Agregar texto final a todas las secciones
export const my_data = {
  introduction: {
    title: "Hi! I'm <span class='h1-accent'>Gabriel Ortiz</span>",
    subtitle: "I’m a Software Engineer who really loves Game Design and Gameplay & Systems programming. Here is a collection of projects that i’ve worked on, professionally and as a hobby.",
    contact: "If you think i'd be a great fit for that project you have been thinking about, contact me! <a href='mailto:bups.gamedev@gmail.com'>bups.gamedev@gmail.com</a>"
  },
  games: [
    {
      title: "Watch my Clock",
      small_desc: "Very short challenge where you have to keep a clock from breaking by picking up their falling pieces. Made for the 2026 GOTM game jam.",
      full_desc: "When the theme for the 2026 GMTK jam was revealed to be 'Countdown' I was really excited. Time sensitive mechanics are one of those that I really think there's a lot left to explore, so I started storming ideas and after a while I combined some ideas that I've had over those last few months and got to this game.<br/><br/> The game centers around this concept where the clock is ticking and pieces fall out of the spots where the second hand jumps to. You as the player have to drag the pieces back to the clock, or else the second hand might reach the empty slots and break the clock. It might sound simple, but the clock has a lot of weird tricks to keep you from repairing it, it might turn off the lights, make the ground shake, or even avoid you.",
      img_src: clockCover,
      external_link: "https://slime-team.itch.io/watch-my-clock",
      my_work: "<ul>     <li>Game design and direction. Aside from bringing the initial concept of the game, I was in charge of leading the project. This meant:     <ul>          <li>Explaining everything that I wanted from the game</li>         <li>Making sure that everyone knew what they had to do</li>         <li>Make quick decisions about the art, music and mechanics so that they fit my idea.</li>         <li>Most important of all, listening the feedback and ideas from my team and integrating them into my vision.</li>     </ul>     <li>Programming for the following:      <ul>         <li>Mouse controls (basic movement, grabbing and putting sticks back into place).</li>         <li>Random events system that chooses which event to trigger.</li>          <li>Difficulty progression system with resources (also known as Scriptable Objects in Unity). Each round is saved in a resource with its dedicated data, allowing for fast and simple iteration of the game's balance.</li>         <li>Win and lose conditions.</li>         <li>Event activation controller with reusable architecture (Orchestration with resources for each event).</li>         <li>Clock slots behavior: Created a script that allowed to change the amount of slots for the clock and reflect that immediately in-engine.</li>         <li>Stick and Second Hand behavior: Sticks drop in a random interval and can be attached when close enough. Second hand moves at a tick speed in a direction which can be changed during runtime.</li>     </ul> </ul>",
      video_url: "",
      example_imgs: [],
    },
    {
      title: "Fish Catcher",
      small_desc: "A game based on old LCD games that I'm making to learn about game design for arcade-style games.",
      full_desc: "Remember those old LCD electronic games? Well I fell in love with them after trying out the Game & Watch Gallery series and decided to make this game to learn what makes them so fun and addictive while also being really simple.<br/><br/>Fish Catcher (I really need to think of a new name) is a modern adaptation of that style of gameplay where you catch fish while avoiding hazards and keeping your bucket empty to get the best rank.",
      img_src: "",
      external_link: "",
      my_work: "Besides the art I did everything for this game, which includes:  <ul>     <li>Game Design. A lot of iteration on ideas to find out which ones where the most fun plus easier to do.</li>     <li>Programming of all gameplay systems:      <ul>         <li>Player controls.</li>         <li>Spawning system that takes into account rounds, spawn probabilites and rules to prevent impossible or bothersome situations.</li>          <li>Game balance with custom spreadsheet imports.</li>          <li>Round-based progression with Godot's Resource system.</li>          <li>Unlockables manager that listens to game events and checks if an objective has been completed.</li>         <li>Enemy behavior.</li>     </ul>     <li>UI/UX programming with Godot's Control nodes.</li>     <li>Various polishing such as squish and stretch for movement and UI transition animations</li>     <li>Creation of sounds, some with traditional capturing methods and others with the help of programs such as Famitracker or ChipTone.</li>     <li>Implementation of art and sounds into the Engine.</li> </ul>",
      video_url: "https://youtube.com/embed/vQTBGV1yfN8?si=uv3sAUiJTWW69N8z",
      example_imgs: [clockCover, rm3Cover ],
    },
    {
      title: "Under Roots",
      small_desc: "3D Action Platformer inspired by the Ape Escape series where you catch robot bugs, cut plants and sneak around to finish levels.",
      full_desc: "Have you ever played Ape Escape? Well, this game is heavily inspired on it. The game features big, beautiful worlds where you play as a frog that captures robot-insects gone rogue.<br/><br/> For this game I took the role of Lead Programmer, so I was in charge of programming and coordinating systems for a team of 2 developers besides myself.",
      img_src: "",
      external_link: "",
      my_work: "<ul>     <li>Worked closely with game designer to make systems that were easy to tweak and quick to expand.</li>     <li>Programming for player character:      <ul>         <li>Player movement that allow easy modifications for designers. Floor, aerial and crouch velocity with their respective parameters, quick turn-arounds, diving, jumping and bouncing.</li>         <li>Componentization of player animation scripts to increase readability and bug tracking.</li>         <li>Bug net gadget: Takes command inputs like those seen in fighting games.</li>          <li>Scissors gadget: Changes player stance to cut plants in different heights.</li>          <li>Radar gadget: Calculates if a bug's position is in the direction that the radar points to and notifies the player via the HUD.</li>         <li>Gadget controller: Orchestrates resources, game objects and HUD elements to equip, activate and notify for animation reproduction.</li>      </ul>     <li>Architecture design and documentation of the following gameplay systems:</li>     <ul>         <li>Save manager.</li>         <li>Gadget system coordination with HUD and resources.</li>         <li>Player states such as crouch, walk, airborne and gadgets.</li>     </ul> </ul>",
      video_url: "https://youtube.com/embed/Qf7V5uSUk7E?si=FwOSYu23HBa181xs",
      example_imgs: [],
    },
    {
      title: "Lilly & Willy",
      small_desc: "2D Platformer where you and a friend control 2 rats to help them escape a laboratory.",
      full_desc: "",
      img_src: lillyWillyCover,
      external_link: "",
      my_work: "",
      video_url: "",
      example_imgs: [],
    },
    {
      title: "Bajo Tierra",
      small_desc: "2D Platformer where you can bury on the ground and ceiling to reach new places. Made for my thesis.",
      full_desc: "",
      img_src: bajoTierraCover,
      external_link: "",
      my_work: "",
      video_url: "",
      example_imgs: [],
    },
    {
      title: "SPELLRAIN",
      small_desc: "Vampire Survivors-like where you help a little mage restore a small town using spells and upgrading armor.",
      full_desc: "",
      img_src: spellrainCover,
      external_link: "",
      my_work: "",
      video_url: "https://youtube.com/embed/JzEF_pYofhE?si=ZL3hrjoOp8M8qmXv",
      example_imgs: [],
    },
    {
      title: "Rhythm Match-3",
      small_desc: "Puzzle game inspired by the Puzzle League series where the rhythm of the song clears the lines.",
      full_desc: "",
      img_src: rm3Cover,
      external_link: "",
      my_work: "",
      video_url: "https://youtube.com/embed/2x1MaTh1uBk?si=nSkolgMtWz41c3iN",
      example_imgs: [],
    }
  ]
}