import { test, expect } from '@playwright/test';

test.describe('Demo API Tests', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';

    test('should get users data successfully', async ({ request }) => {
        // รอการตอบกลับจาก API
        const response = await request.get(`${baseUrl}/users`);
        
        // เช็ค status code
        expect(response.status()).toBe(200);
        
        // เช็คข้อมูลที่ได้รับ
        const users = await response.json();
        expect(Array.isArray(users)).toBeTruthy();
        expect(users.length).toBeGreaterThan(0);
        
        // เช็คโครงสร้างข้อมูล
        const firstUser = users[0];
        expect(firstUser).toHaveProperty('id');
        expect(firstUser).toHaveProperty('name');
        expect(firstUser).toHaveProperty('email');
    });

    test('should get single user by id', async ({ request }) => {
        const userId = 1;
        const response = await request.get(`${baseUrl}/users/${userId}`);
        
        expect(response.status()).toBe(200);
        
        const user = await response.json();
        expect(user.id).toBe(userId);
        expect(user.name).toBeTruthy();
        expect(user.email).toMatch(/@/);
    });

    test('should create new post', async ({ request }) => {
        const response = await request.post(`${baseUrl}/posts`, {
            data: {
                title: 'Test Post',
                body: 'This is a test post',
                userId: 1
            }
        });

        expect(response.status()).toBe(201);
        
        const post = await response.json();
        expect(post).toHaveProperty('id');
        expect(post.title).toBe('Test Post');
    });
});