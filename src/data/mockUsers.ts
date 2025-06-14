import type { User } from '../types';

export const mockUsers: User[] = [
  {
    id: 'user_customer_1',
    email: 'customer@trustcare.com',
    name: 'Sarah Johnson',
    role: 'customer',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    phone: '+1 (555) 123-4567',
    address: {
      street: '123 Health Street',
      city: 'Wellness City',
      state: 'CA',
      zipCode: '90210',
      country: 'USA'
    },
    preferences: {
      notifications: true,
      marketing: false,
      theme: 'light'
    },
    createdAt: new Date('2024-01-15'),
    lastLoginAt: new Date('2024-12-15')
  },
  {
    id: 'user_moderator_1',
    email: 'moderator@trustcare.com',
    name: 'Mike Chen',
    role: 'moderator',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    phone: '+1 (555) 234-5678',
    preferences: {
      notifications: true,
      marketing: false,
      theme: 'light'
    },
    createdAt: new Date('2024-01-10'),
    lastLoginAt: new Date('2024-12-15')
  },
  {
    id: 'user_warehouse_1',
    email: 'warehouse@trustcare.com',
    name: 'David Rodriguez',
    role: 'warehouse',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    phone: '+1 (555) 345-6789',
    preferences: {
      notifications: true,
      marketing: false,
      theme: 'light'
    },
    createdAt: new Date('2024-01-05'),
    lastLoginAt: new Date('2024-12-15')
  },
  {
    id: 'user_admin_1',
    email: 'admin@trustcare.com',
    name: 'Emma Williams',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    phone: '+1 (555) 456-7890',
    preferences: {
      notifications: true,
      marketing: false,
      theme: 'light'
    },
    createdAt: new Date('2024-01-01'),
    lastLoginAt: new Date('2024-12-15')
  }
];