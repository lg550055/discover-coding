# Discover Coding
Discover Coding is an interactive website that helps people understand the benefits of a coding bootcamp and learn what makes a superior bootcamp.

---

## User Stories

1. Landing page
  - Sentence: As a marketing manager I want a landing page to welcome users and ask them to enter their name and city, which we'll use in other pages
  - Feature tasks: Capture user's name and city; store both for use in other pages
  - Acceptance tests: Ensure user's name and city are saved to local storage.

  2. Click to reveal (top 10 jobs)
    - Sentence: As a marketing manager I want twp sets of lightly animated buttons for the user to click each one and reveal its contents
    - Feature tasks: Create two sets of 8-10 buttons, which when clicked reveal their text.  Once all buttons have been click, show a statement summarizing the findings
    - Acceptance tests: Ensure each button revealts its text upon click; summary statement displays after all buttons have been clicked.

  3. Who's a coder
    - Sentence: As a marketing manager I want a set of images of top business people for the user to guess who is a coder; for coders add a sentence of their early coding experience.
    - Feature tasks: Display 9 images of the best known business people.  For each add a way for the user to guess if the person started as a coder.  Then display a brief sentence on the person. Display summary statement
    - Acceptance tests: Ensure images, selectors and sentences displays correctly, follow with a summary statement.

  4. Bootcamps vs other options to learn to code
    - Sentence: As a marketing manager I want the user to rank each of 5 comparison features in order of their preference
    - Feature tasks: Display a comparison grid. Provide the user a way to reorder the list.  Display a summary statement of their preferences.
    - Acceptance tests: User action redisplays grid in preference order.  Summary statement confirms preferences.

  5. Building blocks of a great bootcamp
    - Sentence: As a marketing manager I want the user to click on each of 5 building blocks to reveal a sentence with additional information
    - Feature tasks: Display 5 building blocks, each of which displays an additional sentence upon click.
    - Acceptance tests: Ensure each of 5 styled buttons when click displays a nicely animated statement.

  6. Summary
    - Sentence: As a marketing manager I want to aknowledge the user by name and provide a visual summary of all 5 sections. Also, invite the user to learn more.
    - Feature tasks: Retrieve the user name and preferences from local storage and display them in a statement. Invite the user to learn more.
    - Acceptance tests: Ensure name and preferences are correcly retrieved and displayed.  After summary is displayed, page focus shifts to learn more button.