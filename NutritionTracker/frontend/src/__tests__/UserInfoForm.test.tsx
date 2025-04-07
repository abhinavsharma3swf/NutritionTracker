import {expect} from "vitest";
import {render, screen} from "@testing-library/react";
import {UserInfo, UserInfoCard} from "../NutritionTracker/Components/UserInfoForm.tsx";


describe('UserInfoForm', () => {

    it('should find a header for the form', () => {
        const user: UserInfo = {
            id: 1,
            name: 'John',
            age: 21,
            gender: 'male',
            height: 100,
            weight: 65
        }

        render(<UserInfoCard userinfo={user}/>);
        expect(screen.getByRole('heading', {name:'Enter your details'})).toBeVisibile();

    });
});