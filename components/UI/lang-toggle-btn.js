import Link from 'next/link'
import { useRouter } from 'next/router'
import TranslateIcon from '@mui/icons-material/Translate'
import { Button } from '@chakra-ui/react'
import styled from '@emotion/styled'

const StyledBtn = styled(Button)`
  margin-right: 1.1em;
`

export const LanguageToggle = () => {
  const router = useRouter()
  const { locale } = router
  // locale is a string

  if (locale === 'en') {
    return (
      <Link href="/ja" locale="ja">
        <StyledBtn
          aria-controls="simple-menu"
          aria-haspopup="true"
          color="primary"
        >
          <TranslateIcon />
        </StyledBtn>
      </Link>
    )
  } else {
    return (
      <a>
        <StyledBtn
          aria-controls="simple-menu"
          aria-haspopup="true"
          color="primary"
          onClick={() => {
            router.push('/index', '/', { locale: 'en' })
          }}
        >
          <TranslateIcon />
        </StyledBtn>
      </a>
    )
  }
}
