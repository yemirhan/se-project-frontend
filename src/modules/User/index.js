import { useState } from 'react';
import { AppShell, Burger, Button, Header, MediaQuery, Navbar, Text, useMantineTheme } from '@mantine/core';
import { Link, Outlet, Route, Router, Routes } from 'react-router-dom';

export const Dashboard = () => {
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();

    return (

        <AppShell
            // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
            navbarOffsetBreakpoint="sm"
            // fixed prop on AppShell will be automatically added to Header and Navbar
            fixed
            navbar={
                <Navbar
                    padding="md"
                    // Breakpoint at which navbar will be hidden if hidden prop is true
                    hiddenBreakpoint="sm"
                    // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
                    hidden={!opened}
                    // when viewport size is less than theme.breakpoints.sm navbar width is 100%
                    // viewport size > theme.breakpoints.sm – width is 300px
                    // viewport size > theme.breakpoints.lg – width is 400px
                    width={{ sm: 300, lg: 400 }}
                >
                    <Button
                        component={Link} to="/dashboard"

                        variant='default'
                        style={{ justifyContent: "flex-start" }}
                        fullWidth>
                        Groups
                    </Button>
                    <Button
                        component={Link} to="/dashboard/create/group"

                        variant='default'
                        style={{ justifyContent: "flex-start" }}
                        fullWidth>
                        Create New Group
                    </Button>
                    <Button
                        component={Link} to="/dashboard/packages"

                        variant='default'
                        style={{ justifyContent: "flex-start" }}
                        fullWidth>
                        Packages
                    </Button>
                </Navbar>
            }
            header={
                <Header height={70} padding="md">
                    {/* Handle other responsive styles with MediaQuery component or createStyles function */}
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>

                        <Text>Application header</Text>
                    </div>
                </Header>
            }
        >

            <Outlet />

        </AppShell>

    );
}
