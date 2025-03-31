# Ticket Routing Engine Challenge

**Objective:**  
Implement the `TicketRouter` class in `rulesRouter.ts` to manage an ordered list of routing rules and determine the
appropriate support assignment for a given ticket.

**Requirements:**

- **Rule Management:**

  - Store and sort routing rules by their `priority` (lower number = higher priority).
  - Implement `addRule(rule: RoutingRule): void` and a method `route(ticket: Ticket): string` that checks each rule in
    order.
  - Return the `assignment` of the first matching rule; if none match, return `"General Support"`.

- **Testing:**
  - Write unit tests in `rulesRouter.test.ts` covering various scenarios (e.g., high-priority, VIP, channel-based,
    content-based, and fallback).
  - A TDD approach is welcome but not required.

**Note:**  
Use the provided type definitions in `types/rulesRouter.ts` and the sample configuration in `index.ts` as a guide.
