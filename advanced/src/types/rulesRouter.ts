export interface Ticket {
  id: string;
  channel: 'email' | 'chat' | 'phone' | 'social';
  subject: string;
  description: string;
  priority: 'low' | 'normal' | 'high';
  createdAt: Date;
  customerType?: 'regular' | 'vip';
}

// A lower number for priority means the rule is checked earlier.
export interface RoutingRule {
  priority: number;
  assignment: string;
  predicate: (ticket: Ticket) => boolean;
}
