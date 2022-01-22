import { Button, Text, Textarea, TextInput } from '@mantine/core';
import React from 'react';

export const NewGroup = () => {
    return <div>
        <Text size="lg">Group Name</Text>
        <TextInput placeholder='name' width={"100"} />
        <Text size="lg">Destination</Text>
        <TextInput placeholder='destination' width={"100"} />
        <Text size="lg">Description</Text>
        <Textarea placeholder='description' width={"100"} />
        <Button variant="light" color="blue" style={{ marginTop: 14 }}>
            Create
        </Button>
    </div>;
};
