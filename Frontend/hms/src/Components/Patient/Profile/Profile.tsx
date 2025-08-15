import { Avatar, Divider, Table } from '@mantine/core'
import { all } from 'axios'
import { useSelector } from 'react-redux'


    const patient: any = {
        name: "John Doe",
        email: "",
        dob: "1990-01-01",
        phone: "123-456-7890",
        address: "123 Main St, City, Country",  
        aadharNo: "1234-5678-9012",
        bloodGroup: "O+",
        allergies: "Peanuts",
        chronicDiseases: "Diabetes",
        profilePicture: "/avatar.png",
    };

const Profile = () => {
    const user = useSelector((state: any) => state.user);
  return (
    <div className='p-10'>
        <div className='flex gap-5 items-center'>
            <Avatar variant="filled" src="/avatar.png" size={150} alt="it's me" />
            <div className='flex flex-col gap-3'>
                <div className="text-3xl font-medium text-neutral-900">{user.name}</div>
                <div className='text-xl text-neutral-700'>{user.email}</div>
            </div>
        </div>
        <Divider my="xl" />
        <div>
            <div className='text-2xl font-medium mb-5 text-neutral-900'>Personal Information</div>
            <Table striped stripedColor='primary.1' verticalSpacing="md" withColumnBorders={false}>
                <Table.Tbody className='[&>tr]:!mb-3'>
                    <Table.Tr>
                        <Table.Td className='font-semibold text-xl'>Date of Birth</Table.Td>
                        <Table.Td className='text-xl'>{patient.dob}</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td className='font-semibold text-xl'>Phone</Table.Td>
                        <Table.Td className='text-xl'>{patient.phone}</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td className='font-semibold text-xl'>Address</Table.Td>
                        <Table.Td className='text-xl'>{patient.address}</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td className='font-semibold text-xl'>Aadhar No.</Table.Td>
                        <Table.Td className='text-xl'>{patient.aadharNo}</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td className='font-semibold text-xl'>Blood Group</Table.Td>
                        <Table.Td className='text-xl'>{patient.bloodGroup}</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td className='font-semibold text-xl'>Allergies</Table.Td>
                        <Table.Td className='text-xl'>{patient.allergies || "None"}</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td className='font-semibold text-xl'>Chronic Diseases</Table.Td>
                        <Table.Td className='text-xl'>{patient.chronicDiseases || "None"}</Table.Td>
                    </Table.Tr>
                </Table.Tbody>
            </Table>
        </div>
    </div>
  )
}

export default Profile