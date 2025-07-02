import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from './ui/input'
import { Search } from 'lucide-react'


const transactions = [
  {
    card_number: "8001",
    sale_date: "04/01/25",
    post_date: "04/02/25",
    description: "GADC TURBINA CALAMBA PH",
    amount: "145.00"
  },
  {
    card_number: "8001",
    sale_date: "04/01/25",
    post_date: "04/02/25",
    description: "PETRON TRICIENDEROS LAGUNA PH",
    amount: "1,500.00"
  },
  {
    card_number: "8001",
    sale_date: "04/04/25",
    post_date: "04/07/25",
    description: "KFC WALTERMART MAKILING CALAMBA PH",
    amount: "635.00"
  },
  {
    card_number: "8001",
    sale_date: "04/06/25",
    post_date: "04/07/25",
    description: "S&R MEMBERSHIP STO TOM BATANGAS PH",
    amount: "1,650.50"
  },
  {
    card_number: "8001",
    sale_date: "04/06/25",
    post_date: "04/07/25",
    description: "S&R MEMBERSHIP STO TOM BATANGAS PH",
    amount: "4,881.0"
  },
  {
    card_number: "8001",
    sale_date: "04/07/25",
    post_date: "04/07/25",
    description: "CASH PAYMENT",
    amount: "-96,528.01"
  },
  {
    card_number: "8001",
    sale_date: "04/07/25",
    post_date: "04/08/25",
    description: "WMS CALAMBA CALAMBA PH",
    amount: "128"
  },
  {
    card_number: "8001",
    sale_date: "04/07/25",
    post_date: "04/08/25",
    description: "WMS CALAMBA CALAMBA PH",
    amount: "424"
  },
  {
    card_number: "8001",
    sale_date: "04/09/25",
    post_date: "04/10/25",
    description: "UNIQLO NUVALI ROADSIDE LAGUNA PH",
    amount: "23,424.00"
  },
  {
    card_number: "8001",
    sale_date: "04/10/25",
    post_date: "04/11/25",
    description: "SM SUPERMARKET SM STA STA. ROSA PH",
    amount: "100"
  },
  {
    card_number: "8001",
    sale_date: "04/10/25",
    post_date: "04/11/25",
    description: "H&M LAGUNA PH",
    amount: "501"
  },
  {
    card_number: "8001",
    sale_date: "04/10/25",
    post_date: "04/11/25",
    description: "SM STORE-STA ROSA LAGUNA PH",
    amount: "1,217.00"
  },
  {
    card_number: "8001",
    sale_date: "04/10/25",
    post_date: "04/11/25",
    description: "ONESIMUS SM STA ROSA STA. ROSA PH",
    amount: "7,496.00"
  },
  {
    card_number: "8001",
    sale_date: "04/11/25",
    post_date: "04/14/25",
    description: "CHOWKING CK3385 SOK CALAMBA PH",
    amount: "253"
  },
  {
    card_number: "8001",
    sale_date: "04/12/25",
    post_date: "04/14/25",
    description: "SHAKEYS LAGUNA PH",
    amount: "1,737.40"
  },
  {
    card_number: "8001",
    sale_date: "04/12/25",
    post_date: "04/14/25",
    description: "PET EXPRESS SM STA ROS LAGUNA PH",
    amount: "2,026.00"
  },
  {
    card_number: "8001",
    sale_date: "04/13/25",
    post_date: "04/14/25",
    description: "ACE HARDWARE SM STO TO BATANGAS PH",
    amount: "269.00"
  },
  {
    card_number: "8001",
    sale_date: "04/13/25",
    post_date: "04/14/25",
    description: "SM STORE SM STO TOMAS BATANGAS PH",
    amount: "719.00"
  },
  {
    card_number: "8001",
    sale_date: "04/13/25",
    post_date: "04/14/25",
    description: "MUSTELA SM STO TOMAS SANTO TOMAS PH",
    amount: "1090.00"
  },
  {
    card_number: "8001",
    sale_date: "04/14/25",
    post_date: "04/15/25",
    description: "S&R MEMBERSHIP STO TOM BATANGAS PH",
    amount: "6,211.70"
  },
  {
    card_number: "8001",
    sale_date: "05/01/25",
    post_date: "05/01/25",
    description: "UNLI IN SINGAPOREAIR6182402/06",
    amount: "26,351.51"
  }
]

export function Transactions() {
  return (
    <Card className="container mx-auto rw-full border w-3xl ">
      <CardHeader className='text-left'>
        <CardTitle>
          <div className='flex justify-between'>
            <h1 className='text-2xl font-bold'>Transactions</h1>
            <div className='flex gap-1'>
              <Input type="text" className='w-[140px] border-border' placeholder="Search" />
              <Select>
                <SelectTrigger className="w-[140px] border-border">
                  <SelectValue placeholder="Select Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Current Year</SelectItem>
                  <SelectItem value="banana">Previous Year</SelectItem>
                  <SelectItem value="blueberry">Current Quarter</SelectItem>
                  <SelectItem value="grapes">Previous Quarter</SelectItem>
                  <SelectItem disabled value="pineapple">Custom Date</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardTitle>
        <CardDescription>
          Jan to Dec 2025 period
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left bold">Card Number</TableHead>
              <TableHead className="text-left bold">Sale Date</TableHead>
              <TableHead className="text-left bold">Post Date</TableHead>
              <TableHead className="text-left bold">Description</TableHead>
              <TableHead className="text-right bold">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.card_number} className="p-5 odd:bg-muted/50">
                <TableCell className="text-left">{transaction.card_number}</TableCell>
                <TableCell className="font-medium text-left">{transaction.sale_date}</TableCell>
                <TableCell className="text-left">{transaction.post_date}</TableCell>
                <TableCell className="text-left">{transaction.description}</TableCell>
                <TableCell className="text-right">PHP {transaction.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
    // <div className="w-full border rounded-md overflow-hidden">
    //   <Table >
    //     <TableHeader>
    //       <TableRow>
    //         <TableHead className="text-left bold">Card Number</TableHead>
    //         <TableHead className="text-left bold">Sale Date</TableHead>
    //         <TableHead className="text-left bold">Post Date</TableHead>
    //         <TableHead className="text-left bold">Description</TableHead>
    //         <TableHead className="text-right bold">Amount</TableHead>
    //       </TableRow>
    //     </TableHeader>
    //     <TableBody>
    //       {transactions.map((transaction) => (
    //         <TableRow key={transaction.card_number} className="p-5 odd:bg-muted/50">
    //           <TableCell className="text-left">{transaction.card_number}</TableCell>
    //           <TableCell className="font-medium text-left">{transaction.sale_date}</TableCell>
    //           <TableCell className="text-left">{transaction.post_date}</TableCell>
    //           <TableCell className="text-left">{transaction.description}</TableCell>
    //           <TableCell className="text-right">PHP {transaction.amount}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </div>
  );
}

