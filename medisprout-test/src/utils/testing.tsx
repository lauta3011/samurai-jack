import React, { ReactElement } from 'react'
import {render, RenderOptions } from '@testing-library/react'

import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from 'react-router-dom';
import { Card } from "@mui/material";

export const mockData = [{
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
}, {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
}, {
    "postId": 1,
    "id": 3,
    "name": "odio adipisci rerum aut animi",
    "email": "Nikita@garfield.biz",
    "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
}]

const mockQueryClient = new QueryClient({
    defaultOptions: {
        queries: {
           staleTime: Infinity,
           structuralSharing: false
    }}
});

export function useQueryComments() {
    return useQuery({ queryKey: ['comments'], queryFn: () => { return mockData }  });
}

export const Wrapper = ({children}: {children: React.ReactNode}) => {
    return (
        <QueryClientProvider client={mockQueryClient}>
            {children}
        </QueryClientProvider>
    )
}

export const MockedApp = ({children}: {children: React.ReactNode}) => {
    return (
        <Card sx={{ backgroundColor: 'secondary.dark', color:'primary.light', padding:'15px' }}>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </Card>
    )
}