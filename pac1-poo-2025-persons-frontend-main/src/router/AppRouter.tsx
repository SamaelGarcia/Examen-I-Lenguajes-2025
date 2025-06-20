import { Route, Routes } from "react-router"
import { Navbar } from "../presentation/components/layout/Navbar"
import { HomePage } from "../presentation/pages/home/HomePage"
import { CountriesPage } from "../presentation/pages/countries/CountriesPage"
import { PersonsPage } from "../presentation/pages/persons/PersonsPage"
import { CreateCountryPage } from "../presentation/pages/countries/CreateCountryPage"
import { EditCountryPage } from "../presentation/pages/countries/EditCountryPage"
import { DeleteCountryPage } from "../presentation/pages/countries/DeleteCountryPage"
import { RolesPage } from "../pages/roles/RolesPage";
import { CreateRolePage } from "../pages/roles/CreateRolePage";
import { EditRolePage } from "../pages/roles/EditRolePage";
import { DeleteRolePage } from "../pages/roles/DeleteRolePage";


export const AppRouter = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Routes>
                <Route element={<Navbar />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/countries" element={<CountriesPage />} />
                    <Route path="/countries/create" element={<CreateCountryPage />} />
                    <Route path="/countries/:countryId/edit" element={<EditCountryPage />} />
                    <Route path="/countries/:countryId/delete" element={<DeleteCountryPage />} />
                    <Route path="/persons" element={<PersonsPage />} />

                    <Route path="/roles" element={<RolesPage />} />
                    <Route path="/roles/create" element={<CreateRolePage />} />
                    <Route path="/roles/edit/:roleId" element={<EditRolePage />} />
                    <Route path="/roles/delete/:roleId" element={<DeleteRolePage />} />

                </Route>
            </Routes>
        </div>
    )
}
