- open a terminal
- run 'npm install'
- run 'npm start'
- open a second terminal
- run 'newman run fish\ API.postman_collection.json' OR
- Go to postman an try out the requests, with starting point at: http://localhost:4000/api 

1. Explain and defend your implementation of HATEOAS in your solution.

I have implemented HATEOAS by adding all request links, some are added to the entry link: "http://localhost:4000/api" and some are added to the fish entry point, you get there by following the fish link from the first entry point. The links make it easier for a user to follow how the requests should be used.

2. If your solution should implement multiple representations of the resources. How would you do it?



3. Motivate and defend your authentication solution. 3a. What other authentication solutions could you implement? 3b. What pros/cons do this solution have?

I have choosen JWT(jsonwebtoken) for authentication on this assignment, it was quite easy to begin with and it seems like a good way to authenticate. Of what I have read some say PASETO is an alternative that is safer than JWT, a lot of people thinks JWT is not exactly the safest way to handle this type of information. However it was easy to implement and enough for this assignment.  

### Pros
- simple to use
- stateless

### Cons
- if the key leaks out, the system will be compromised
- decryption can be done


4. Explain how your webhook works.

I have used the npm package node-webhooks for this. I have done a Post request where the webhook adress is added to webHooksDB.json when posting. and then triggered it when a new user registers. 

5. Since this is your first own web API, there are probably things you would solve in another way, looking back at this assignment. Write your thoughts about this.

It was quite difficult to know where to start, since this is new and the assignment became clear after I was almost half way through. I would probably do things in a diffrent order if I was to do it over again. 

6. Which "linguistic design rules" you implemented? List them here and motivate "for each" of them very briefly why you chose them? Remember that you must consider "at least" FIVE "linguistic design rules" as the linguistic quality of your API.
- rule 1 (/ to indicate hierarchical relationship)
- rule 2 (no / at the end of URI)
- rule 4 (no _ in URIs)
- rule 5 (only lowercase letters in URIs)
- rule 8 (plural is used for collection names)
- rule 10 (CRUD operation names are not part of URIs)

7. Did you do something extra besides the fundamental requirements? Explain them.
Unfortunately I started with the assignment a bit too late (due to other assignment handins) and did not have time to do anything extra. I did not have much time to do tests but I have done a few, I would have wanted to do some more. I would also have liked to do some more error handling. 