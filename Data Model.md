**1. Data Model**

The app requires a relational database structure to manage both lawyers and consumers effectively. Below is the data model with detailed explanations for each entity:

### Entities:

1. **Users**:
   - **`user_id`** (Primary Key): Unique identifier for each user in the system.
   - **`user_type`**: Indicates whether the user is a lawyer or a consumer. Possible values: "Lawyer" or "Consumer".
   - **`name`**: Full name of the user.
   - **`email`**: Email address of the user, used for login and communication.
   - **`password_hash`**: Hashed version of the user's password for secure authentication.
   - **`phone_number`**: Contact number of the user for verification and communication.
   - **`registration_date`**: Timestamp indicating when the user registered in the system.
   - **`profile_status`**: Status of the user profile, such as "Active" or "Inactive".

2. **Lawyer Profiles**:
   - **`lawyer_id`** (Foreign Key to `Users.user_id`): Unique identifier referencing the lawyer in the `Users` table.
   - **`specialization`**: Area of law the lawyer specializes in (e.g., family law, criminal law).
   - **`experience_years`**: Number of years the lawyer has been practicing.
   - **`location`**: The location where the lawyer operates or provides services.
   - **`availability_status`**: Indicates whether the lawyer is currently available to take new requests.

3. **Consumer Profiles**:
   - **`consumer_id`** (Foreign Key to `Users.user_id`): Unique identifier referencing the consumer in the `Users` table.
   - **`location`**: The location of the consumer, which can be used to match them with local lawyers.
   - **`preferred_lawyer_specialization`**: The type of legal service the consumer is most likely to require, used for filtering requests.

4. **Requests**:
   - **`request_id`** (Primary Key): Unique identifier for each request created by a consumer.
   - **`consumer_id`** (Foreign Key to `Users.user_id`): The ID of the consumer who created the request.
   - **`description`**: Detailed description of the legal issue for which assistance is needed.
   - **`request_status`**: Status of the request, such as "Open", "Picked", or "Closed".
   - **`created_at`**: Timestamp indicating when the request was created.
   - **`picked_by_lawyer_id`** (Foreign Key to `Users.user_id`): ID of the lawyer who has picked the request. If the request is not yet picked, this field will be null.

5. **Messages** (Communication between lawyer and consumer):
   - **`message_id`** (Primary Key): Unique identifier for each message.
   - **`request_id`** (Foreign Key to `Requests.request_id`): The ID of the request to which the message belongs.
   - **`sender_id`** (Foreign Key to `Users.user_id`): The ID of the user (lawyer or consumer) who sent the message.
   - **`receiver_id`** (Foreign Key to `Users.user_id`): The ID of the user (lawyer or consumer) who is the recipient of the message.
   - **`message_text`**: The content of the message exchanged between the lawyer and consumer.
   - **`sent_at`**: Timestamp indicating when the message was sent.

### Relationships:
- **Users and Lawyer Profiles**: Lawyers are a subset of users, so each lawyer must have a corresponding entry in the `Users` table. The `lawyer_id` in the `Lawyer Profiles` table references the `user_id` in the `Users` table.
- **Users and Consumer Profiles**: Consumers are also a subset of users, and their profile information is stored in the `Consumer Profiles` table, linked by `consumer_id`.
- **Users and Requests**: Each request is linked to a consumer via the `consumer_id`. Lawyers can pick requests, and once picked, the `picked_by_lawyer_id` is updated to reflect which lawyer is handling the request.
- **Requests and Messages**: Messages are linked to requests to facilitate communication between the lawyer and consumer for a specific legal issue. The `sender_id` and `receiver_id` fields help manage the direction of the conversation.

### Data Flow Explanation:
- When a **consumer** registers, an entry is created in the `Users` table, and additional details are stored in the `Consumer Profiles` table.
- When a **lawyer** registers, an entry is created in the `Users` table, and their specific details are stored in the `Lawyer Profiles` table.
- **Consumers** can create **requests** that are saved in the `Requests` table. **Lawyers** can view open requests and pick one to assist with, which updates the `picked_by_lawyer_id` field.
- Once a **request** is picked by a lawyer, the **consumer** and **lawyer** can communicate via the `Messages` table, which keeps track of all messages exchanged.

### Considerations for Implementation:
- **Data Integrity**: Use foreign key constraints to maintain data integrity across tables (e.g., ensuring that a message references valid `request_id`, `sender_id`, and `receiver_id`).
- **Security**: Store passwords in a hashed format to protect user data. Implement role-based access control to ensure only authorized users can pick requests or send messages.
- **Scalability**: Index fields like `request_status`, `picked_by_lawyer_id`, and `specialization` to optimize query performance, especially when filtering requests for lawyers.

