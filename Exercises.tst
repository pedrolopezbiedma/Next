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

