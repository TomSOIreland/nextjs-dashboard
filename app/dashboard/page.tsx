import { Card } from "../ui/dashboard/cards"
import RevenueChart from "../ui/dashboard/revenue-chart"
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';



export default function Page() {
    return (
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>
    )
}