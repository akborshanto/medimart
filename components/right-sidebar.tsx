import { Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface RightSidebarProps {
  className?: string
}

export function RightSidebar({ className }: RightSidebarProps) {
  const birthdays = [{ name: "Jane Smith", day: "Today" }]

  const contacts = [
    { id: 1, name: "Sarah Johnson", online: true },
    { id: 2, name: "Michael Brown", online: true },
    { id: 3, name: "Emily Davis", online: false },
    { id: 4, name: "David Wilson", online: true },
    { id: 5, name: "Jessica Taylor", online: false },
    { id: 6, name: "Daniel Anderson", online: true },
    { id: 7, name: "Lisa Thomas", online: false },
    { id: 8, name: "Robert Jackson", online: true },
    { id: 9, name: "Jennifer White", online: true },
    { id: 10, name: "Christopher Harris", online: false },
  ]

  return (
    <aside className={`w-[300px] p-2 ${className} overflow-y-auto`}>
      {/* Birthdays */}
      <div className="p-2 mb-4">
        <h3 className="text-gray-500 font-medium mb-2">Birthdays</h3>
        {birthdays.map((birthday) => (
          <div key={birthday.name} className="flex items-center gap-2 mb-2">
            <div className="text-[#1877F2] text-xl">🎂</div>
            <p className="text-sm">
              <span className="font-medium">{birthday.name}</span>'s birthday is {birthday.day.toLowerCase()}.
            </p>
          </div>
        ))}
      </div>

      {/* Contacts */}
      <div className="p-2">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-gray-500 font-medium">Contacts</h3>
          <div className="flex gap-2">
            <Search className="h-4 w-4 text-gray-500" />
          </div>
        </div>

        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input placeholder="Search contacts" className="pl-10 bg-gray-100 border-none rounded-full text-sm" />
        </div>

        <div className="space-y-1">
          {contacts.map((contact) => (
            <Button key={contact.id} variant="ghost" className="w-full justify-start gap-3 h-12">
              <div className="relative">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={`/placeholder.svg?height=32&width=32&text=${contact.name.charAt(0)}`}
                    alt={contact.name}
                  />
                  <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                </Avatar>
                {contact.online && (
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                )}
              </div>
              <span className="font-medium">{contact.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </aside>
  )
}

