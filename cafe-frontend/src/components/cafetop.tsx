import { Box, Button, Center, Grid, Heading, HStack, Stack, Text, VStack, Wrap } from "@yamada-ui/react"
//import { CoffeeIcon, UserIcon, EditIcon } from "lucide-react"
import { CoffeeIcon, UserIcon, PencilIcon } from "@yamada-ui/lucide"
import { Link } from "@yamada-ui/react"

export default function CafeHome() {
  return (
    <Box maxW="7xl" mx="auto" px={4} py={12}>
      <VStack spacing={10} textAlign="center">
        <HStack spacing={3} justify="center">
          <CoffeeIcon size={48} color="#f97316" />
          <Heading size="2xl">カフェナビ</Heading>
        </HStack>
        <Text fontSize="lg" color="gray.500" maxW="600px">
          あなたにぴったりのカフェを見つけよう。Wi-Fi、コンセント、雰囲気など、様々な条件で検索できます。
        </Text>
        <Wrap justify="center" spacing={4}>
          <Link href="/search" passHref>
            <Button size="lg" colorScheme="orange">カフェを探す</Button>
          </Link>
          <Link href="/register" passHref>
            <Button size="lg" variant="outline" colorScheme="orange">カフェを登録する</Button>
          </Link>
        </Wrap>
      </VStack>

      <Grid mt={16} templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
        <Card
          icon={<CoffeeIcon size={32} color="#f97316" />}
          title="カフェ検索"
          description="Wi-Fi、コンセント、雰囲気などの条件でカフェを検索できます。"
        />
        <Card
          icon={<UserIcon size={32} color="#f97316" />}
          title="マイページ"
          description="お気に入りのカフェや投稿した口コミを管理できます。"
        />
        <Card
          icon={<PencilIcon size={32} color="#f97316" />}
          title="カフェ登録"
          description="新しいカフェの情報を登録して、みんなに共有しましょう。"
        />
      </Grid>
    </Box>
  )
}

function Card({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Box borderWidth="1px" borderRadius="xl" p={6} textAlign="center" boxShadow="md">
      <Center>
        <Box bg="orange.100" borderRadius="full" p={3}>{icon}</Box>
      </Center>
      <Heading size="md" mt={4}>{title}</Heading>
      <Text mt={2} color="gray.500">{description}</Text>
    </Box>
  )
}
