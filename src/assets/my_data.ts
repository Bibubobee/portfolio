import clockCover from './images/clock_cover.png'
import rm3Cover from './images/rm3_cover.png'
import spellrainCover from './images/spell_cover.png'

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
      my_work: ""
    },
    {
      title: "Fish Catcher",
      small_desc: "A game based on old LCD games that I'm making to learn about game design for arcade-style games.",
      full_desc: "Remember those old LCD electronic games? Well I fell in love with them after trying out the Game & Watch Gallery series and decided to make this game to learn what makes them so fun and addictive while also being really simple.<br/><br/>Fish Catcher (I really need to think of a new name) is a modern adaptation of that style of gameplay where you catch fish while avoiding hazards and keeping your bucket empty to get the best rank.",
      img_src: "",
      external_link: "",
      my_work: "Besides the art I did everything for this game, which includes: <ul><li>Game Design and direction.</li><li>Programming of all gameplay systems: Player controls, spawning system, game balance, event system, progression, ranking, unlockables and enemy behavior.</li><li>Creation of sound and visual effects.</li><li>Implementation of art and sounds into the Engine.</li></ul>"
    },
    {
      title: "Under Roots",
      small_desc: "3D Action Platformer inspired by the Ape Escape series where you catch robot bugs, cut plants and sneak around to finish levels.",
      full_desc: "",
      img_src: "",
      external_link: "",
      my_work: ""
    },
    {
      title: "Lilly & Willy",
      small_desc: "2D Platformer where you and a friend control 2 rats to help them escape a laboratory.",
      full_desc: "",
      img_src: "",
      external_link: "",
      my_work: ""
    },
    {
      title: "Bajo Tierra",
      small_desc: "2D Platformer where you can bury on the ground and ceiling to reach new places. Made for my thesis.",
      full_desc: "",
      img_src: "",
      external_link: "",
      my_work: ""
    },
    {
      title: "SPELLRAIN",
      small_desc: "Vampire Survivors-like where you help a little mage restore a small town using spells and upgrading armor.",
      full_desc: "",
      img_src: spellrainCover,
      external_link: "",
      my_work: ""
    },
    {
      title: "Rhythm Match-3",
      small_desc: "Puzzle game inspired by the Puzzle League series where the rhythm of the song clears the lines.",
      full_desc: "",
      img_src: rm3Cover,
      external_link: "",
      my_work: ""
    }
  ]
}