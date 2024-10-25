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

- Right now we are not doing any validation when saving the meal, let's get that done.
- The validation will be to check if the value is empty or if when trimming it, is empty string. And we do that for all fields. Also we check if there is no @ for the email. Also, we check that the image is empty and that its size  === 0
    - If there is any validation error: throw new Error('Invalid input');
- When testing, you'll notice that you are missing something in your project, create it so you can see the proper error.

--- Video 127 ---

- For some unknown reason, the React team decided to suddenly change this Hook's name to useActionState. In addition, it now must be imported from react instead of react-dom.

- We are now going to return an object with a message: wrong input from the server action.
- Now, in the component where we have the form:
    - We import and use useActionState() to track the state of shareMeal ( or whatever you have called the server action to submit the form )
- Now, before the submit button, we check if the message is truthy and if so, we show within a p
- We also need to change the shareMeal interface to receive a prevState prop in the first param from the useActionState.
- Solve the error that you find.
- Test that everything is working.

--- Video 129 ---

- Build the application.
- Then, run the project in production mode.
- Test how the submission of new meals behaves.
- Create a new section that explain this under Production behaviour in Notion.
- Then, use revalidatePath('/meals', ['page'/'layout']) right after we save the meal into the database ( explain this in Notion as well ) --> Test this with the details page

--- Video 132 ---

- In the Meals we'll use metadata new:
    - Title: All meals
    - Description: Browse the decliduous meals share by our vibrant community

- Check how the title in the tab is now changed.

--- Video 133 ---
- In the meals details page, use the async function generateMEtadata({} params ) { // Add this to the Notion
    const meal = getMeal(params.mealSlug)
    return {
        title: meal.title
        description: meal.summary
    }
}
