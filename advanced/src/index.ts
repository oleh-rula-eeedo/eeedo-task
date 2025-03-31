import { TicketRouter } from './rulesRouter';
import type { Ticket } from './types/rulesRouter';

export const ticketRouter = new TicketRouter();

// High-priority tickets always go to Priority Support.
ticketRouter.addRule({
  priority: 1,
  predicate: (ticket: Ticket) => ticket.priority === 'high',
  assignment: 'Priority Support'
});

// VIP customer tickets (if not high priority) go to VIP Support.
ticketRouter.addRule({
  priority: 2,
  predicate: (ticket: Ticket) => ticket.customerType === 'vip',
  assignment: 'VIP Support'
});

// Phone or chat tickets go to Live Support.
ticketRouter.addRule({
  priority: 3,
  predicate: (ticket: Ticket) => ticket.channel === 'phone' || ticket.channel === 'chat',
  assignment: 'Live Support'
});

// Social channel tickets go to Social Media Support.
ticketRouter.addRule({
  priority: 4,
  predicate: (ticket: Ticket) => ticket.channel === 'social',
  assignment: 'Social Media Support'
});

// Billing-related tickets, based on keywords in subject or description.
ticketRouter.addRule({
  priority: 5,
  predicate: (ticket: Ticket) => {
    const content = (ticket.subject + ' ' + ticket.description).toLowerCase();
    return ['refund', 'billing', 'invoice'].some((keyword) => content.includes(keyword));
  },
  assignment: 'Billing'
});

// Technical support tickets based on keywords.
ticketRouter.addRule({
  priority: 6,
  predicate: (ticket: Ticket) => {
    const content = (ticket.subject + ' ' + ticket.description).toLowerCase();
    return ['technical', 'error'].some((keyword) => content.includes(keyword));
  },
  assignment: 'Technical Support'
});

// Additional rules can be added dynamically without changing the core engine.
