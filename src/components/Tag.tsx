import { Button } from './ui/button'

// components/Tag.tsx
type TagProps = {
  label: string
  onClick: () => void
  active?: boolean
}

const Tag = ({ label, onClick, active = false }: TagProps) => (
  <Button
    className={`p-2 rounded-full ${active ? 'bg-primary text-white' : 'bg-transparent text-primary'} text-sm`}
    onClick={onClick}
  >
    {label}
  </Button>
)

export default Tag
