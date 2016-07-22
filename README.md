# taskman

www.supertaskman.com

My previous experience as a project manager and production coordinator in Hollywood was the inspiration for this task and project management application. Taskman was modeled after other task management applications, such as Flow - https://www.getflow.com/ and Producteev - https://www.producteev.com/. I attempted to emulate those sites, yet inject a bit of "superheroic flair" to the app in an attempt to personalize it.

Taskman was my first true full-stack application, utilizing the MEAN stack as was taught to us. I laid out, wire-framed and designed the site using Adobe Illustrator. The front-end is built with AngularJS, with routing handled with ui-router. The opening splash was done with a library plug-in called PleaseWait - http://pathgather.github.io/please-wait/, which made it easy to build the splash. I also used UI-datepicker plug-in for my datepickers, and I was very happy with those results. All the styling was done by hand, and I even created custom icons and logos for my app with Adobe Illustrator. Login was handled with localAuth along with passport and express-sessions.

For the back end, I used Nodejs and Express. The database was handeled by MongoDB, a noSQL database system and Mongoose, which helps streamline data manipulation for MongoDB.

In Taskman, a user can login, and see upcoming tasks and projects along with their due date. A user can then read/delete/modify projects and assign tasks along with a due date for those tasks. Finally a user can create/delete/modify tasks and set a due date for that task

As a first full stack app, I was happy with what I was able to accomplish. I might go back, tweak some styling and make it cleaner and more polished. A few features I'd like to have added never made it in; I was originally planning on having a user able to define a team and invite other users to collaborate on projects and have tasks assignable between users. I never got that chance to finish it. Perhaps some day I'll get to it.
