import React from "react"
import { Box, Text, HStack, Icon, StackProps, Stack } from "@chakra-ui/react"
import { MoneyBackGuaranteeIcon, NoSetupFeesIcon, NoMothlySubscriptionIcon } from '../icons/Icon'

interface FeatureProps extends StackProps {
    icon: React.ElementType;
}

function Feature(props: FeatureProps) {
    const { icon, children, ...rest } = props;
    return (
        <HStack {...rest} spacing='6'>
            <Icon as={icon} boxSize={['8', '8', '12']} />
            <Text textAlign='left' fontWeight='lg' fontSize='bold'>{children}</Text>
        </HStack>
    )
}

export function Features() {
    return (
        <Box
            maxW='1024px'
            m='auto'
            pt='60px'
            pb='8'>
            <Stack px='12'
                direction={['column', 'column', 'row']}
                spacing={['6', '6', '5']}>
                <Feature icon={MoneyBackGuaranteeIcon}>30 days money back Guarantee</Feature>
                <Feature icon={NoSetupFeesIcon}>No setup fees 100% hassle-free</Feature>
                <Feature icon={NoMothlySubscriptionIcon}>No monthly subscription Pay once and for all</Feature>
            </Stack>
        </Box>
    )
}