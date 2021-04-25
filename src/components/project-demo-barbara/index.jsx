const Barbara = () => (
    <div className="block-demo block-demo--barbara">
        <h4>Barbara Bui</h4>
        <Router>
            <Switch>
                <Route path="/barbara-project">
                    <BarbaraProject />
                </Route>
            </Switch>
        </Router>
    </div>
)

export default Barbara;