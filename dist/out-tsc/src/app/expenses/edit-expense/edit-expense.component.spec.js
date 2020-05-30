import { async, TestBed } from '@angular/core/testing';
import { EditExpenseComponent } from './edit-expense.component';
describe('EditExpenseComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditExpenseComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(EditExpenseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=edit-expense.component.spec.js.map