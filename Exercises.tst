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
