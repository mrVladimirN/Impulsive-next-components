import generatePortalLink from "@/actions/generatePortalLink";

const ManageAccountButton = () => (
    <form action={generatePortalLink}><button type="submit">Manage Billing</button></form>
);

export default ManageAccountButton;
