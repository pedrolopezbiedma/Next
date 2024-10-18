--- Video 103 ---
- In the main page JSX, we need to include a <main> and a <header>
    - Download the styles for the page and use them

- In the header, we want:
    - a div with class slideshow
    - another div that contains 2 more divs
        - first div contains class hero
            - h1 with the text NextLevel food for NextLevel foodies.
            - p with Taste and share food from all over the world.
        - second div contains class cta
            - Link with the text Join the community that leads to the community page.
            - Link with the text Explore Meals and leads to the meals page.

- In the main, we want:
    - copy the main content from the section page.js

--- Video 104 ---
- Create a new component called Slideshow
    - Copy the content of the component from the attached file.

- Place the new component within the main page.
- You'll see an issue.

--- Video 105 ---
- Convert the component into a client component in order to fix the issue.

--- Video 106 ---
- Download the community page content from the lecture and use it within the project.
    - Change in the Navbar Community for Foodies Community

- Now we want the links in the navbar to react with the active class whenever we are in that page.
    - For that we can use the usePathname hook from Next: Use it to check if we start the path with meals or if we are in community.
    - Whenever you do this, you'll run into an error. // We could also use the params props???
    - Solve that error thinking. ( Ensure you have the right classes so everything is working the way it snould)

--- Video 107 ---
- Download the styles for the page.
- For the meals page we also want to have a <header> and a <main> sections.

- For the header, we want:
    - an h1 with the text Delicious Meals, created <span>by you</span> ( higlight class for the span )
    - p with the text Choose your favorite ercipe and cook it yourself. It is easy and fun!
    - p ( cta class ) with a Link that goes to share page with the text: Share your favorite recipe.

- For the main, create a new component called: Meals-grid that will receive some meals with:
    - Download the styles for this component.
    - ul 
        - map through the meals
            - for each meal we use an li
            - Create a new meal.item component and copy the content for it from the attached lecture ( also the styles )
            - Use that new component within the li
    - Use the styles within the previous content.
    - Use the new meals-grid component

--- Video 108 ---
- Install a new dependency better-sqlite3 ( Start a new package list and add this to it) --> To install a sqlite3 to have a database locally
    - Download the initdb.js and paste it into the root of your project. ( Put some notes about this in the package explanation )
    - To use this database, we need to run `node initdb.js` inside a terminal and a meals.db will be created into the project.

--- Video 109 ---
- Create a new folder in the root of the project called lib / database / backend, think about it.
    - Inside, create a file called meals.ts
    - Inside that file:
        import sql from 'better-sqlite3'

        const db = sql('meals.db') <-- This name depends on the initdb.js file and the defined database there.

        export fundtion async getMeals() {
            await new Promise((resolve) => setTimeout(resolve, 2000)) // This is only added for demo purposes, is not needed. We need to convert the meals component into an async one when calling this now
            db.prepare('SELECT * FROM meals').all(); // All because we are getting all data. If we were getting only one row, we'd use get. If we would be adding, run, document this into the package
        }

    - In the meals component, we call to get the meals:
        - Import { getMeals } from '???'
        - const meals = await getMeals();
        - Use the meals inside the code.
        - Test everything

--- Video 110 ---
- CReate a loading.ts within the meals scope.
- Create a MealsLoadingPage and return
    - Download the styles for this component
    return a p with the needed class and the text Fetching meals...
    - Test that this is working.

--- Video 111 ---
- The loading that we have implementes is nice, but we now want to display loading content just for the dynamic parts of the meals component, not the entire page.
- For that, we remove / change the name of the previously created loading file
- Oursource the logic to get the meals and the grid into a separated component.
    - Use that new component with the Suspense component ( Clean the already existing code accordingly )
    - Move & clean the styles in order for them to work.
    - Outsource the fallback to a new component

--- Video 112 ---
- Change the logic of the getMeals to throw an error ( BAsically, manually throw it )
- Create an error.ts file that will be in charge of the error page content
    - Create an MealsErrorComponent that will retrieve the following content:
        - main with class of error  ( its in the globals.css ) with the content:
            - h1 with text an error ocurred
            - p with the text Failed while fetching meals
- While testing this, you'll see that there is an error asking you to convert the component to a client one.
    This is like this to ensure that we could catch any client fetch error.

--- Video 113 ---
- Define a not.found page at global level wht the following content:
    -  main with class not-found ( also in globals )
        - h1 with Not found
        - p with the text Unfortunately, we could not find the requested page or resource.

--- Video 114 ---
- Lets go now to the MealDetails page.
- Lets go with the content for the page
    - Download the styles for this component.
    - Include a main and a header.
        - For the header content:
            - a div with the class of image
                - an Image using fill
            - another div with class of headerText
                - h1 with the text TITLE
            - p with class of creator and the text by <a>NAME </a> ( the href will be a mailto and the email address from the user  but we don't have it yet )
            - another p with the class of summary and SUMMARY
        - For the main conrtent:
            - a p with the class instructions and
                - set the properfy dangerouslySetInnerHTML = { { __html: '...'} }

- Now, lets create the method to get the meal details. For that:
    - Create a new method called getMealDetails and will receive a slug ( or mealId ) - This time we don't need to purposely make it async
    - and then return db.prepare('SELECT * from meals WHERE slug = ?').get(slug) // We do it this way instead of doing slug = skug within prepare for security reasons

- Use this new method into the MealsDetails component.
    - To use getMealsDetails we need to get it from the url
    - Now, set the proper content into the JSX ( take care of doing some meals.instructions = meals.instructions.replace(/\n/g, '<br />') )

--- Video 115 ---
- If you try to search for a meal that does not exist, you will see the general not found page. But we want to create an special one for tnis case.
- For this, we will check if there is a meal and if not, we will call notFOund from next/navigation
    - In that case it will show the general not found so copy the one already existing, and place it within the proper scope modifying a bit the copies so it makes sense.

--- Video 116 ---
- now, we will work in the page to create a new recipe.
    - Download the content of the component and place it within your tsx file ( Also the styles ).
    - Test that everything is working fine.

--- Video 117 ---
- We want to work now in the Image Picker, for it we will create a new component within the components folder.
    - Download the styles for the image picker and place them.
    - Create a new component with:
        - div with class picker.
            - a label with the text props.label connected to a input of id=props.name
            - a div with class controls
                - input id=props.iname and type file and accept='image/png, image/jpeg' and name = props.name
    - Use the component within the form already and test that everything is working fine.

    - Now, to the input set the class of input, so it gets hidden.
    - Now after the input, we include a button with class of button and of type button with the textPick an Image
    - Add an event to the button a handler for the click ( Yes, you can mark this component as a use client )
        - Create a imageInputRef ( with useRef ) and set it as ref in the input
        - In the method then:
            - imageInputRef.current.click() // So this will click the hodden input
            - Test that is working.

--- Video 118 ---
- Include some state in the component to hold the pickedImage
- Create a new method that will trigger once the input value is changed.
    - In the method: 
        - get the file from the event.
        - create a new fileReader and 
        - define fileReader.onload = () => {
            fileReader.result // to be set into the state
        }
        - then use fileReader.readAsDataUrl(file)

- Before the input we will place
    - a div with class preview
        - if no image into the state --> p with text no image picked yet.
        - if image into the state --> an Image that with the useState value with fill

--- Video 119 ---
There are two improvements you could / should make to that "Image Picker" component:

1) Reset the previewed image if no image was selected:

Add set setPickedImage(null); to the if (!file) block:

if (!file) {
  setPickedImage(null);
  return;
}
2) Add the required prop to the (hidden) <input> element:

<input
  className={classes.input}
  type="file"
  id={name}
  accept="image/png, image/jpeg"
  name={name}
  ref={imageInput}
  onChange={handleImageChange}
  required
/>
This ensures that the <form> can't be submitted without an image being selected.

--- Video 120 ---
- In order to submit the form, create a server action where we receive the form data.
    - With the form data, create a meal ( title, image [ensuring you are using the proper id], summary, instructions, creator, creator_email)
    - For now, we will log this meal that's supposed to be stored in the db

--- Video 121 ---
- Convert the ShareMeal component to a client one and you'll face an issue with the Server Action.
- Solve it by decoupling the action into a separate file.
- Remove the useClient for now.

--- Video 122 ---
- Install 'slugify' into the proyect ( and add info about it in Notion ). Also xss ( to protect the site into scripting attacks) - This is because the instructions being set as innerHtml
- Import them into the file where we have the meals fetch methods ( really easy imports )
- Let's now create the method to store meals
    - To create the slug: const slug = slugify(meal.title, { lower: true}) // Forcing all chars to be lowercase
    - To sanitize the instructions: const instructions = xss(meal.instructions)

--- Video 123 ---
- We want to store images into the public/images folder and therefore save that path in the folder within the meal image information that is going to be stored in the db
- To do this
    - First, we get the extension of the image -> const image = meal.image.name.split('.').pop();
    - Now, we will create a unique filename ( and not the one used by the user ) -> `${slug}.${extension}`

    - Now, in order to store the image, we will use the nodeJS fs API.
        - First, we import it -> import fs from 'node:fs';
        - Then, we use it -> 
            const stream = fs.createWriteStream(`public/images/${filename}`); 
            const bufferedImage = await meal.image.arrayBuffer();
            stream.write(Buffer.from(bufferedImage), (error) => { 
                if(error) throw New Error('Saving image failed')
             })

    - Now, finally, we can deal with the database storing:
        - meal.image = `/images/${filename}`

        db.prepare(`INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) VALUE (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)`).run(meal)

    . Now, we can remove the console.log and use the method
    - Test that everything is working.

    - Now, redirect the user to the meals page after submitting
    - Again, test that is working.

--- Video 124 ---
- We want to change the submit button while the submission is happening. For that, decouple the submit button into a new component and use there useFormStatus
- We need to show a button with text Submitting... ( disabled ) if status is pending or....another one Share Meal if is not pending.

--- Video 125 ---

