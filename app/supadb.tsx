
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Referrals() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data: referrals } = await supabase.from('referral').select()

    return (
        <ul>
            {referrals?.map((ref) => (
                <li>{ref}</li>
            ))}
        </ul>
    )
}
