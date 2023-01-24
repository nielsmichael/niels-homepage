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

  return (
    <Link href={locale} locale={locale}>
      <StyledBtn
        aria-controls="simple-menu"
        aria-haspopup="true"
        color="primary"
        onClick={() => {
          if (locale === 'ja') {
            router.push('/index', '/', { locale: 'en' })
          } else {
            router.push('/ja', '/ja', { locale: 'ja' })
          }
        }}
      >
        <TranslateIcon />
      </StyledBtn>
    </Link>
  )
}
