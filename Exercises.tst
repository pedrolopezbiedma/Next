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
