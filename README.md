1. Model Schema and CRUD API
   Users:
   • Attributes: id, type (user/admin), first name, last name, email,
   profile_id, created date, updated date
   Profile:
   • Attributes: id, user_id, profile_info, created date, updated date
   Enquiry:
   • Attributes: id, user_id, teams, createdDate, updatedDate.

2. Typesense Collection
   •Create Typesense collections for user profiles and enquiries.
   •Use merge and lookup modes for efficient data retrieval.

3. Typesense Sync
   •Implement functionality to sync updated fields in Typesense.

4. Typesense Watcher
   •Implement a watcher to sync data whenever changes occur in users,
   profiles, or enquiries.

5. Search Typesense API
   •Develop a Typesense search API with 3-4 mandatory sorting options and a
   search feature for both user profiles and enquiries.

6. Google Sheet Sync
   •Implement a cron job to update values in Google Sheets every hour based
   on changes in MongoDB.

7. Expiry and Email Notification
   •Use a cron job to check enquiry creation dates and mark them as expired
   after seven days.
   •Implement email notifications to users linked to expired enquiries.

8. Enquiry Model within 'Teams' Object
   •Add CRUD operations for managing user profile data within the 'Teams'
   object.

9. Activity Logs API
   •Implement a logging mechanism to capture and display API activities.

10. Middleware, Authentication, RESTful Principles, Error Handling
    •Develop middleware for request processing.
    •Implement authentication for user and admin roles.
    •Adhere to RESTful principles for API design.
    •Implement robust error-handling mechanisms.

Added Advantages

- Dashboard API:
  • Create an API to provide dashboard information.
  • User Approval for Enquiry Teams:
  • Add functionality for user approval and status changes.

- Monthly Tracks Enquiry API:
  • Develop an API to track monthly enquiries.
- Email Services:
  • Integrate email services for notifications.

- Google Sheet Sync to MongoDB:
  • Enhance the sync to support both ways.
