# Ramen: A Client

## Stay tuned for exciting ramen-based information!

---
---


## Route Tables
### Auth

| Endpoint         | Component | `Auth`? |
|------------------|-------------------|-------|
| `/sign-up`       | `SignUp`    | No |
| `/sign-in`       | `SignIn`    | No |
| `/change-password` | `ChangePassword`  | Yes |
| `/sign-out`        | `SignOut`   | Yes |

### Ramen

| Endpoint         | Component | RESTful | Verb | `Auth?` |
|------------------|-------------------|-------|-------|-------|
| `/ramen`       | `IndexRamen`    | `Index` | `GET` | No |
| `/ramen/:id`       | `ShowRamen`    | `Show` | `GET` | No |
| `/ramen/add` | `CreateRamen`  | `Create` | `POST` | Yes |
| `/ramen/:id`        | ``   | `Update` | `PATCH` | Yes |
| `/ramen/:id`        | ``   | `Destroy` | `DELETE` | Yes |


---
*[Ramen icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/ramen)*