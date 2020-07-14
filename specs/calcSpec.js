describe("Calculator", function() {
    describe("Addition tests", function(){
        it("should return 42", function(){
            expect(addition(20,22)).toBe(42);
        });
        it("should return 26", function(){
            expect(addition(19,7)).toBe(26);
        });
        it("should return an error if we dont supply two numbers", function(){
            spyOn(window, "alert");
            addition("hitchhikers", "guide");
            expect(window.alert).toHaveBeenCalledWith("Error");
        });
    });
});