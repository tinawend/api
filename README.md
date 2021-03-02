- npm install
- npm start
- 

1. Explain and defend your implementation of HATEOAS in your solution.
I have implemented HATEOAS by adding all request links, some are added to the entry link: "http://localhost:4000/api" and some are added to the fish entry point, you get there by following the fish link from the first entry point. The links make it easier for a user to follow how the requests should be used.

2. If your solution should implement multiple representations of the resources. How would you do it?

3. Motivate and defend your authentication solution. 3a. What other authentication solutions could you implement? 3b. What pros/cons do this solution have?
I have choosen JWT(jsonwebtoken) for authentication on this assignment, it was quite easy to begin with and it seems like a good way to authenticate. 

4. Explain how your webhook works.


5. Since this is your first own web API, there are probably things you would solve in another way, looking back at this assignment. Write your thoughts about this.
It was quite difficult to know where to start, since this is new and the assignment became clear after I was almost half way through. I would probably do things in a diffrent order if I was to do it over again. 

6. Which "linguistic design rules" you implemented? List them here and motivate "for each" of them very briefly why you chose them? Remember that you must consider "at least" FIVE "linguistic design rules" as the linguistic quality of your API.
- 
- 
- 
- 
- 

7. Did you do something extra besides the fundamental requirements? Explain them.
